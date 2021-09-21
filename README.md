<h1 align="center">Linvoice 📃</h1>
<p align="center">
  <img width="128px" src=""/>
</p>
<p align="center">
  Linvoice is simple invoince 📃 management application.
</p>
<p align="center">
  <a href="https://github.com/Asim-Tahir/linvoice/issues/new?assignees=&labels=Bug&title=">Report Bug</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/Asim-Tahir/linvoice/issues/new?assignees=&labels=Feature&title=">Request Feature</a>
</p>

## Screenshot 👀

<h3 align="center">The Home Page 🏠</h4>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134180687-80917af2-6e65-423b-92b8-9e4f5c7c5d1f.png" alt="Screenshot Home Page" title="Screenshot Home Page"/>
</p>

<br/>

<h3 align="center">View the services on your invoice</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134181876-636a4cc9-23f7-4e48-92bc-08c195ed5734.png" alt="Screenshot Services" title="Screenshot Services"/>
</p>

<br/>
  
<h3 align="center">Look at invoices as detailed</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134182106-76a4cef4-542f-4b12-8f62-733b5b4b0004.png" alt="Screenshot Invoice Detail" title="Screenshot Invoice Detail"/>
</p>

<br/>

<h3 align="center">Add a Invoice</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134182176-147db2a4-36be-4e97-aa7f-aafed07e3184.png" alt="Screenshot Add Invoice" title="Screenshot Add Invoice">
</p>

<br/>

<h3 align="center">Add Service to Invoice</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134182225-daf02250-6572-4f7b-97bd-6517f3a550a3.png" alt="Screenshot Add Service in Invoice" title="Screenshot Add Service in Invoice"/>
</p>

<br/>

<h3 align="center">Let's talk about statistics 📈</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134182366-15b497da-52bb-4c3b-be44-dffe024f428a.png" alt="Screenshot Invoice Status Stat" title="Screenshot Invoice Status Stat"/>
</p>

<br/>

<h3 align="center">Also have dark/light mode support 🌞/🌚</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/29407019/134182526-7644f8da-b4e6-44be-bd5c-e8d5acb6ce72.png" alt="Screenshot Dark/Light Mode Support" title="Screenshot Dark/Light Mode Support"/>
</p>

## Installation

### 1. Clone repo in your local machine

> This repository contains external libraries that have been modified as submodules.

```bash
git clone https://github.com/Asim-Tahir/react-frontend-homework.git
```

```bash
git clone git@github.com:Asim-Tahir/react-frontend-homework.git
```

### 2. Install dependencies

> This project uses [yarn](https://yarnpkg.com/en/) and [yarn workspaces](https://yarnpkg.com/features/workspaces) to manage dependencies. Please make sure you have yarn installed.

```bash
yarn
```

### 3. Run the app

```bash
yarn dev
```

## Folder structure

<details>
  <summary><code>packages/</code> workspace folder</summary><br>

This folder contains all the packages that are used in the application.

  <details>
    <summary>
      <code>assets/</code> folder
    </summary><br>

├───assets
│ ├───images
│ └───styles

This folder contains all the images and core tailwindcss styles.

  </details>

  <details>
    <summary>
      <code>components/</code> folder
    </summary><br>

This folder contains all the components that are used in the application.

├───components
│ ├───atoms
│ │ └───a11y
│ ├───molecules
│ │ ├───cards
│ │ ├───chart
│ │ └───dashboard
│ │ └───invoice
│ │ └───table
│ ├───organisms
│ │ ├───dashboard
│ │ │ ├───invoices
│ │ │ │ └───table
│ │ │ └───services
│ │ │ └───table
│ │ └───sidebar
│ ├───pages
│ │ ├───account
│ │ └───dashboard
│ │ └───invoices
│ ├───styled
│ │ ├───atoms
│ │ │ └───typography
│ │ ├───molecules
│ │ ├───organisms
│ │ ├───pages
│ │ └───templates
│ └───templates
│ └───dashboard

  </details>

  <details>
    <summary>
      <code>context/</code> folder
    </summary><br>

This folder contains all the custom react context that are used in the application.

├───context
│ └───tests

  </details>

  <details>
    <summary>
      <code>hooks/</code> folder
    </summary><br>

This folder contains all the custom react hooks that are used in the application.

├───hooks
│ └───store

  </details>

  <details>
    <summary><code>icon/</code> folder</summary><br/>

This folder contains all the icons and Icon component that are used in the application.

├───icon
│ ├───icons
│ │ ├───account
│ │ ├───brand
│ │ ├───filled
│ │ └───outline
│ ├───types
│ └───Icon.tsx <- Icon component

  </details>

  <details>
    <summary>
      <code>router/</code> folder
    </summary><br>

This folder contains all routes and route component that are used in the application.

├───router
│ ├───routes
│ ├───types
| └───index.tsx <- Router component

  </details>

  <details>
    <summary>
      <code>store/</code> folder
    </summary><br>

This folder contains redux & redux-toolkit store that are used in the application. And tests for store.

├───store
│ ├───tests
│ │ ├───invoices
│ │ └───services
│ └───types

  </details>

  <details>
    <summary><code>utils/</code> folder</summary><br>
    └───utils

This folder contains all the utils function that are used in the application.

  </details>

  <details>
    <summary>
      `other` folders
    </summary><br>

This folders contains all the other files that are used in the application.

`types` folder contain global typescript types.
`email` folder contain email templates are used for sending emails.

├───types
├───email
│ └───templates

  </details>
</details>

<details>
  <summary>
    <code>config/</code> workspace folder
  </summary><br>

This folder contains all the configuration files for the application.

├───eslint-config
├───jest-config
│ ├───preset
│ │ ├───babel-jest
│ │ ├───ts-jest
│ │ └───vite
│ └───transformer
├───stylelint-config
└───tsconfig

</details>

<details>
  <summary><code>src/</code> folder</summary><br>
  This folder contains core application files. And this files is start point for application.
</details>

## Running tests

```bash
yarn workspaces foreach run test
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache License. See [`LICENSE`](LICENSE) for more information.
