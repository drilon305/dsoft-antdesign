import React from 'react'
import { Collapse, Button  } from 'antd';

const { Panel } = Collapse;


const Faq = () => {
  return (
    <div id='faq' className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="How to setup the theme?" key="1">
            <p>
              Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant
              bonorum, te ius vide maiorum hendrerit. In alii instructior vix
            </p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>
              Postea ceteros corrumpit ius te, eos epicuri intellegebat
              consequuntur et.
            </p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>
              Eu veritus ancillae suavitate per, cum in appellantur efficiantur.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper
              consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea
              velit facete nec.
            </p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper
              consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea
              velit facete nec.
            </p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>
              Erant vitae alterum in mel, viris rationibus argumentum eu sea.
              Per ei diceret constituto, ei qui simul intellegam, ut eos dolor
              ceteros. Altera contentiones et eam. Discere alienum intellegat te
              duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti
              nam, quo cu magna possit patrioque.
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button type="primary"> <i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>
  );
};

export default Faq
