# social_network_samurai


Учебный проект, написанный в рамках курса Дмитрия Кузюбердина **"ReactJS - Путь Самурая".**

Целью данного проекта является укрепление знаний **React, Redux, TypeScript, REST API**.

Проект написан полностью с нуля, изначально на **JavaScript** с использованием библиотеки **React**, потом по мере укрепления знаний **TypeScript** был полностью переписан на **TypeScript**. Так же по мере рефакторинга проекта классовые компоненты переписывались на функциональные с использованием **hooks**.
Следующий шаг рефакторинга заключается в переводе всех компонентов полностью на хуки (для упрощения кода и избавления от ненужных нынче **HOC**, таких как connect)

Сторонние библиотеки, используемые в проекте:
  - **axios** (взаимодействие с сервером (для отправки форм, запросов пользователей с сервера, отправка сообщений в чат и прочего))
  - **redux-form** (работа с формами, в будущих версиях будет **formik** (уже в проекте, несколько компонентов уже работает с данной библиотекой))
  - **antd** (Ant-Design является временным решением и подключался исключительно для того чтобы взять готовый макет, полноценная адаптивная вёрстка будет позже)
  - **classnames** (для более удобной работы с классами)
  - **react-router-dom** (роутинг приложения)
  - **redux** (отвечает за стейтменеджемент)

# Start
```bash
npm start
```
# Interface
<p align="center"><img src="https://i.ibb.co/1J2QqcT/preview-project.gif" alt="ReviewProject" border="0"></p>

<div align="right">
  <img src="https://i.ibb.co/XLPJSyM/react-icon.png" alt="react" height="40px"/>
  <img src="https://i.ibb.co/PrCNpDg/redux-icon.png" alt="redux" height="40px"/>
  <img src="https://i.ibb.co/5n6NZh2/typescript-icon.png" alt="typeScript" height="40px"/>
  <img src="https://i.ibb.co/72YpBjg/icons8-css-60.png" alt="css" height="40px"/>
  <img src="https://i.ibb.co/R6XVMZt/html-icon.png" alt="html" height="40px"/>
</div>
