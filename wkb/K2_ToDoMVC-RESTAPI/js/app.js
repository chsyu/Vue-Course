/*global jQuery, Template, Router */
jQuery(function($) {
  "use strict";

  const todoTemplate = todos =>
    todos.map(
      todo => `
      <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
         <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completed ? "checked" : ""
            }>
            <label>${todo.title}</label>
            <button class="destroy"></button>
         </div>
         <input class="edit" value="${todo.title}">
      </li>
   `
    );

  const footerTemplate = todo => `
			<span class="todo-count"><strong>${todo.activeTodoCount}</strong> ${
    todo.activeTodoWord
  } left</span>
			<ul class="filters">
				<li>
					<a class="${todo.filter == "all" ? "selected" : ""}" href="#/all">All</a>
				</li>
				<li>
					<a class="${
            todo.filter == "active" ? "selected" : ""
          }" href="#/active">Active</a>
				</li>
				<li>
					<a class="${
            todo.filter == "completed" ? "selected" : ""
          }" href="#/completed">Completed</a>
				</li>
			</ul>
			${
        todo.completedTodos
          ? '<button class="clear-completed">Clear completed</button>'
          : ""
      }
  `;

  const server = axios.create({ 
    baseURL: "http://localhost:4000/todos" 
  });

  let ENTER_KEY = 13;
  let ESCAPE_KEY = 27;

  let util = {
    uuid: function() {
      /*jshint bitwise:false */
      let i, random;
      let uuid = "";

      for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += "-";
        }
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
          16
        );
      }

      return uuid;
    },
    pluralize: function(count, word) {
      return count === 1 ? word : word + "s";
    },
    store: function(namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        let store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };

  let App = {
    init: function() {
      this.todos = util.store("todos-jquery");
      this.todoTemplate = todoTemplate;
      this.footerTemplate = footerTemplate;
      this.bindEvents();

      new Router({
        "/:filter": function(filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init("/all");
    },
    bindEvents: function() {
      $(".new-todo").on("keyup", this.create.bind(this));
      $(".toggle-all").on("change", this.toggleAll.bind(this));
      $(".footer").on(
        "click",
        ".clear-completed",
        this.destroyCompleted.bind(this)
      );
      $(".todo-list")
        .on("change", ".toggle", this.toggle.bind(this))
        .on("dblclick", "label", this.editingMode.bind(this))
        .on("keyup", ".edit", this.editKeyup.bind(this))
        .on("focusout", ".edit", this.update.bind(this))
        .on("click", ".destroy", this.destroy.bind(this));
    },
    render: function() {
      let todos = this.getFilteredTodos();
      $(".todo-list").html(this.todoTemplate(todos));
      $(".main").toggle(todos.length > 0);
      $(".toggle-all").prop("checked", this.getActiveTodos().length === 0);
      this.renderFooter();
      $(".new-todo").focus();
      util.store("todos-jquery", this.todos);
    },
    renderFooter: function() {
      let todoCount = this.todos.length;
      let activeTodoCount = this.getActiveTodos().length;
      let template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, "item"),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });

      $(".footer")
        .toggle(todoCount > 0)
        .html(template);
    },
    toggleAll: async function(e) {
      let isChecked = $(e.target).prop("checked");

      this.todos.forEach(async todo => {
        todo.completed = isChecked;
        await server.put(`/${todo.id}`, todo);
      });
      this.render();
      let _todos = await server.get("/");
      this.todos = _todos.data;
    },
    getActiveTodos: function() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function() {
      return this.todos.filter(function(todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function() {
      if (this.filter === "active") {
        return this.getActiveTodos();
      }

      if (this.filter === "completed") {
        return this.getCompletedTodos();
      }

      return this.todos;
    },

    destroyCompleted: async function() {
      let _completedTodos = this.getCompletedTodos();
      this.todos = this.getActiveTodos();
      this.render();
      _completedTodos.forEach(async todo => {
            await server.delete(`/${todo.id}`);
      });      
      let _todos = await server.get("/");
      this.todos = _todos.data;
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    getIndexFromEl: function(el) {
      let id = $(el)
        .closest("li")
        .data("id");
      let todos = this.todos;
      let i = todos.length;

      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: async function(e) {
      let $input = $(e.target);
      let val = $input.val().trim();

      if (e.which !== ENTER_KEY || !val) {
        return;
      }
      let _todo = {
        id: util.uuid(),
        title: val,
        completed: false
      };
      this.todos.push(_todo);
      $input.val("");

      this.render();
      await server.post("/", _todo);
      let _todos = await server.get("/");
      this.todos = _todos.data;
    },
    toggle: async function(e) {
      let i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
      await server.put(`/${this.todos[i].id}`, this.todos[i]);
      let _todos = await server.get("/");
      this.todos = _todos.data;
    },
    editingMode: function(e) {
      let $input = $(e.target)
        .closest("li")
        .addClass("editing")
        .find(".edit");
      // puts caret at end of input
      let tmpStr = $input.val();
      $input.val("");
      $input.val(tmpStr);
      $input.focus();
    },
    editKeyup: function(e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }

      if (e.which === ESCAPE_KEY) {
        $(e.target)
          .data("abort", true)
          .blur();
      }
    },
    update: async function(e) {
      let el = e.target;
      let $el = $(el);
      let val = $el.val().trim();

      if ($el.data("abort")) {
        $el.data("abort", false);
      } else if (!val) {
        this.destroy(e);
        return;
      } else {
        this.todos[this.getIndexFromEl(el)].title = val;
        await server.put(
          `/${this.todos[this.getIndexFromEl(el)].id}`,
          this.todos[this.getIndexFromEl(el)]
        );
      }

      this.render();
      let _todos = await server.get("/");
      this.todos = _todos.data;
    },
    destroy: async function(e) {
      let _id = this.todos[this.getIndexFromEl(e.target)].id;
      this.todos.splice(this.getIndexFromEl(e.target), 1);
      this.render();
      await server.delete(`/${_id}`);
      let _todos = await server.get("/");
      this.todos = _todos.data;
    }
  };

  App.init();
});
