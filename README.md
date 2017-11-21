#DATA-DASHBOARD

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Producto final_


***

### Descripción del Proyecto
##### Data-Dashboard es una herramienta web donde se puede ver el  desempeño de las estudiantes de Laboratoria.  Su función principal es la visualización de datos, a través de gráficos de manera fácil y rápida,  para que las Training Managers (TMs) puedan obtener una optimización del tiempo en el análisis de datos.

#### Contenido:
* Encabezado: logo de Laboratoria.

* Nav: contiene imagen de usuario, nombre, botón de Log out y menú desplegable.
* Div de contenedores: se definen los contendores que llevan  en su interior la visualización de los datos, mostrando los resultado de las fórmulas matemática e insertando imagenes de gráficos. 
 
* Colores: Se utilizan los colores institucionales de Laboratoria, #FFF, #000, #F7F7F7, #FBD300.


#### Solicitudes Específicas:

* El total de estudiantes presentes por sede y generación.
* El porcentaje de deserción de estudiantes.
* La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados.
* El porcentaje que representa el dato anterior en relación al total de estudiantes.
* El Net Promoter Score (NPS) promedio de los sprints cursados.
 		El NPS se calcula,bajo la siguiente fórmula:
		[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
		[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
		[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

		[NPS] = [Promoters] - [Detractors]
+ La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
+ La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
+ El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
+ La puntuación promedio de l@s profesores.
* La puntuación promedio de l@s jedi masters.

#### Algunas Soluciones:

* Para lograr obtener el total de estudiantes por sede y generación, se crea una función que cuenta a todas las estudiantes de la generación y sede.

* El porcentaje de estudiantes,se genera observando si no están  activas, y está cantidad se divide por el total de estudiantes.

* La cantidad de estudiantes que supera la meta, se obtiene con una función que, suma todos los hse, por separado de los tech y comparando si son mayores al 70% (840 ptos.), si el resultado es mayor, suma todos los tech de todos los sprint, si son mayores al 70% (1.260 ptos.) suma ambos y sólo los guarda en una variable si la estudiante se encuentra activa, para así obtener otros datos;
	* 1- cantidad de estudiantes
	* 2- porcentaje de estudiantes que pasaron ambos (hse+tech)

#### Desarrollado con:

HTML - CSS - JAVASCRIPT  Para páginas web dinámicas.


#### Autoras 

María Paz Thompson - JavaScrip - Html - Css
Karina Fuentealba Html - Css
(Squad Fantastic For)
