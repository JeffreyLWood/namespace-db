import Sequelize from "/usr/local/node_modules/sequelize/lib/index.js";
import db from "../db.js";

const PullRequest = db.define("pullrequest", {
  pr_id: {
    type: Sequelize.STRING(),
  },
  title: {
    type: Sequelize.STRING(),
  },
  status: {
    type: Sequelize.STRING(),
  },
  yesTokenAmount: {
    type: Sequelize.STRING(),
    defaultValue: "0",
  },
  noTokenAmount: {
    type: Sequelize.STRING(),
    defaultValue: "0",
  },
  repo_id: {
    type: Sequelize.STRING(),
  },
});

export default PullRequest;
