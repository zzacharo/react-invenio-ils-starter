import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

import { BOOK_DETAILS_TABS } from '../../../../constants';
import './BookTabs.css';

class BookTabs extends Component {
  renderTabs() {
    return BOOK_DETAILS_TABS.map((tab, index) => {
      return {
        menuItem: tab.menuItem,
        render: () => (
          <Tab.Pane attached={false}>
            Tab {index} Content Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci a cum, maiores impedit dicta vel sed,
            consequuntur officiis dolore debitis laborum qui minus aut
            necessitatibus et sit ipsum architecto saepe. Eos quidem quibusdam
            aspernatur quasi sapiente blanditiis iste provident ipsam minus. Non
            nam, deserunt reiciendis cupiditate quia quod similique quasi
            quisquam culpa pariatur veritatis cumque recusandae? Recusandae
            magnam harum consequatur! Nemo repellendus officia amet, ipsa eos
            doloremque a magnam quas, voluptate repellat impedit illo. Molestiae
            aut provident sequi laborum unde, nisi, modi saepe mollitia animi
            commodi optio quibusdam ipsum reiciendis. Architecto tenetur fuga
            quibusdam omnis nihil impedit, quas doloribus at minima vero odit
            laborum voluptatibus obcaecati amet commodi quae! Consectetur nobis
            repudiandae eligendi est ipsum totam consequuntur eos, quod ipsa.
            Ipsa pariatur ea eum autem dolor eligendi at saepe, ex quas, ut
            aliquam dicta doloribus repellendus facilis fuga magnam! Rem, in ut.
            Magni nobis laboriosam, quisquam vel repudiandae minus et? Delectus,
            impedit? Debitis a natus consequuntur quos iure ipsam aliquam
            eligendi magni.
          </Tab.Pane>
        ),
      };
    });
  }

  render() {
    return (
      <div>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={this.renderTabs()}
        />
      </div>
    );
  }
}

export default BookTabs;
