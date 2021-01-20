import { createBrowserHistory } from "history";

export default createBrowserHistory({
  basename: document.getElementsByTagName("base")[0].getAttribute("href"),
});
