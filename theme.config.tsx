import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return{
      titleTemplate: '%s – Lab Docs'
    }
  },
  banner: {
    key: 'release',
    text: (
      <a href="https://github.com/pranavmadhu01/lab-docs" target="_blank">
        🔴 Lab docs is looking for contributers from different universities. 🔴
      </a>
    )
  },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code">
        <path
          fill="#444"
          d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"
        ></path>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}>Lab Docs</span>
    </>
  ),
  project: {
    link: "https://github.com/pranavmadhu01/lab-docs",
  },
  docsRepositoryBase: "https://github.com/pranavmadhu01/lab-docs",
  footer: {
    text: (
      <span>
        Lab Docs {new Date().getFullYear()} ©{' '}
        <a href="https://pranavmadhu.in" target="_blank">
          pranavmadhu
        </a>
        .
      </span>
    ),
  },
};

export default config;
