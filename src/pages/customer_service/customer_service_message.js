import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/customer_service_message.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CreateQuestion from "./create_question";
import QuestionRecord from "./question_record";
import CreateMessage from "./create_message";
import { parseUrlParametesFromLocation } from "./create_message";
import { useLocation } from "react-router-dom";
const CustomerServicePage = () => {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  const urlParameters = parseUrlParametesFromLocation(location.search);
  const admin = urlParameters.admin === "true";
  console.log("admin", admin);
  return (
    <div className="container justify-content-center flex-column">
      {/* header */}
      {/* title */}
      <div class="adjustTitleFram">
        <h3 class="adjustTitle">客服留言</h3>
        <img src="/img/customer_service/small_dice.png" class="csDice" alt="" />
      </div>
      {/* 外框背景 */}
      <div class="messageOuter">
        {/* 頁籤 */}
        <div class="pagination">
          {admin ? null : (
            <Link to={`${url}/create`}>
              <div>客服留言</div>
            </Link>
          )}
          <Link to={`${url}/record`}>
            <div>問答紀錄</div>
          </Link>
        </div>

        {/* 內文內框 */}
        <div class="messageInner">
          <Switch>
            <Route exact path={`${path}/`} component={CreateQuestion} />
            <Route path={`${path}/create`} component={CreateQuestion} />
            <Route path={`${path}/record`} component={QuestionRecord} />
            <Route path={`${path}/create_message`} component={CreateMessage} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default CustomerServicePage;
