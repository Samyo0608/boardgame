import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/customer_service_message.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import React, { useState } from "react";
import CreateQuestion from "./create_question";
import QuestionRecord from "./question_record";
import CreateMessage from "./create_message";

const CustomerServicePage = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="container justify-content-center flex-column">
      {/* header */}
      {/* title */}
      <div class="djustTitleFram">
        <h3 class="djustTitle">客服留言</h3>
        <img src="/img/customer_service/small_dice.png" class="csDice" alt="" />
      </div>
      {/* 外框背景 */}
      <div class="messageOuter">
        {/* 頁籤 */}
        <div class="pagination">
          <Link to={`${url}/create`}>
            <div>客服留言</div>
          </Link>
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
