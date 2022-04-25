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
  <a href="https://reactjs.org/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://redux.js.org/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  </a>
  <a href="https://www.typescriptlang.org/">    
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://www.w3.org/Style/CSS/">
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  </a>
  <a href="https://html.spec.whatwg.org/">    
    <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  </a>
</div>
