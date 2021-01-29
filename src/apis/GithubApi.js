
import * as constants from "../constants/Constants";

export const repositoriesUrl = "https://api.github.com/users/" + constants.userName +"/repos"
export const pullRequestsUrl = "https://api.github.com/search/issues?q=author%3A" + constants.userName + "+type%3Apr"
export const repositoryLanguageStatUrl = (repositoryName) => "https://api.github.com/repos/" + constants.userName + "/" + repositoryName + "/languages"