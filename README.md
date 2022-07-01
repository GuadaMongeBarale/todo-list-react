# TO-DO List

Con esta aplicación podrás llevar tu lista de tareas. 

Incluye la función de buscar, marcar como completada y eliminar.


![todo](./img_readme/todo.png)

## VISITALA :point_right: [AQUÍ](https://GuadaMongeBarale.github.io/todo-list-react) :point_left:

---
--- 

##  Proceso y características destacadas

---

### :dart: **Hooks**

Los **Hooks** fueron incorporados en React 16.8. 
Permiten, entre otras cosas, usar el estado sin necesidad de escribir una clase.

*** 

#### **useState**

Implementado para declarar variables de estado.
Entonces, durante los siguientes renderizados, nos dará el estado actual. 

Una de las implementaciones en el proyecto es en el Formulario, donde el usuario escribe su nuevo TODO. 

* Observamos el estado del `textarea`
* Combinamos esto con escuchar eventos
* Si hay un cambio en el elemento, actualizamos el estado
* Agregamos el nuevo estado como un TODO si el usuario hace click en el botón de "Añadir"

```javascript
// String vacío como valor inicial
const [newTodoValue, setNewTodoValue] = useState('')

const onChange= (event) => {
        setNewTodoValue(event.target.value)
    }
const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
```

![add](./img_readme/add.png)

***
#### **Custom Hook**

Creación de un hook con el fin de reutilizar código, y así, ejecutar procesos para manejar información sin afectar a otros componentes.

En la carpeta [`hooks`](src/hooks) puede encontrar el archivo `useLocalStorage`.
Contiene las funciones para almacenar en *Local Storage* las tareas creadas por el usuario.

Con `useEffect` ( hook de efecto que ejecuta el código que le enviemos dentro justo antes de renderizar el componente) y `setTimeout` (método de JavaScript que establece un temporizador) se simula el comportamiento de la aplicación si consumiera una *API* con este mismo fin.

***
#### **Contexto**

*Context* permite pasar datos a través del arbol de componentes sin necesidad de utilizar *props* en cada nivel. 

Puede ver la creación del contexto [aquí](src/TodoContext/index.js) 

Esto hace que sea muy sencillo compartir información con varios componenetes. 

Un ejemplo es el Título  y buscador de la página.

Si el usuario ya guardó TODOs se los mostrará y contará los completados

![todo](./img_readme/todo.png)

De lo contrario 

![first TODO](./img_readme/first.png)

Mira con que poquitas líneas de código se consigue:

* [Título - Contador ](src/components/TodoCounter/) 

* [Buscador ](src/components/TodoSearch/)




