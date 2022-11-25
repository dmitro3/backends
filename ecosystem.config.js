module.exports = {
  apps: [
    {
      name: 'TOTAL VALUE',
      exec_mode: 'cluster',
      instances: 1,
      script: 'controller/totalValue_test.js',
      args: 'start',
      cron_restart: "*/5 * * * *"
    }
  ]
}