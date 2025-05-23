// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "todo-backend",
      script: "index.js", // or index.js or server.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
    },
  ],
};
