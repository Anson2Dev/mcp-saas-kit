import { Key, ChartLine, BookOpen, Terminal, Activity } from "lucide-react";

/**
 * 网站基本信息
 */
export const SITE = {
  // 网站名称
  NAME: "MCP.Day",
  // 网站URL
  URL: "https://mcp.day",
  //GITHUB REPO
  GITHUB_REPO_URL:"https://github.com/Anson2Dev/mcp-saas-kit",
};

/**
 * 社交媒体链接
 */
export const SOCIAL = {
  GITHUB: "https://github.com/Anson2Dev",
  X: "https://x.com/mcpday",
  DISCORD: "https://discord.gg/mcpday",
  WECHAT: "ansonhyq",
  EMAIL: "anson@love2.dev",
};


/**
 * 导航链接
 */
export const NAVIGATION = {
  MAIN: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ],
  FOOTER: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ],
  DASHBOARD_Main: [
    {
      title: "Overview",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "MCP playground",
      url: "#",
      icon: Terminal,
      items: [
        {
          title: "Try our MCP",
          url: "/dashboard/playground",
        },
      ],
    },
    {
      title: "API Keys",
      url: "#",
      icon: Key,
      items: [
        {
          title: "Manage Keys",
          url: "/dashboard/apikeys",
        },
        {
          title: "Usage",
          url: "/dashboard/usage",
        },
      ],
    },
    {
      title: "Activity",
      url: "#",
      icon: Activity,
      items: [
        {
          title: "Activity Logs",
          url: "/dashboard/activitylogs",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Coming soon",
          url: "#",
        },
      ],
    },
  ],
};

/**
 * API_PREFIX 不能超过3个字符
 */
export const API_PREFIX = "mdy";

/**
 * MCP配置示例
 */
export const MCP_CONFIG_EXAMPLE = `{
  "mcpServers": {
    "mcp-hello-world": {
      "command": "npx",
      "args": [
        "mcp-hello-world",
        "--api-key=your-hello-world-api-key"
      ]
    }
  }
}`;

export const GOOGLE_OAUTH_STATE_COOKIE_NAME = "google-oauth-state";
export const GOOGLE_OAUTH_CODE_VERIFIER_COOKIE_NAME = "google-oauth-code-verifier";