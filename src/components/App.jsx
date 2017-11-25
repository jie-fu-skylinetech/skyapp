import React, {PropTypes} from 'react';

import {
    Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavLeft, Link, NavCenter, NavRight,  Button, Popup,
    LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Subnavbar, ButtonsSegmented,
    Tab, AccordionContent, onOpen, onOpened, onClose, onClosed
} from 'framework7-react';

import {routes} from '../routes';
import { Tabs } from 'framework7-react/dist/commonjs/framework7-react/Tabs';

import {Doughnut} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2';

const account_allocation_data = {
    labels: [
        'JPYUSD',
        'GBPUSD',
        'EURUSD'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};

const model_allocation_data = {
    labels: [
        'AUDUSD',
        'EURUSD',
        'JPYUSD'
    ],
    datasets: [{
        data: [200, 150, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};

const performance_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Account Performance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'green',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 2, 3, 1.9, 2.0, 2.3, 4.5, 4.3, 4.1, 4.5, 4.7, 5.0]
      },
      {
        label: 'Model Performance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'blue',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 1.5, 2.3, 2.1, 2.7, 3.8, 4.5, 4.2, 4.7, 5.2, 5.6, 6.3]
      }

    ]
  };

const quotes = { "DailyFX": { "HG": { "spread": "20.00", "bid": "3.13177", "ask": "3.13377" }, "CHFJPY": { "spread": "2.00", "bid": "114.067", "ask": "114.087" }, "EURUSD": { "spread": "0.60", "bid": "1.16684", "ask": "1.16690" }, "AUDCHF": { "spread": "2.50", "bid": "0.75955", "ask": "0.75980" }, "EURCHF": { "spread": "2.00", "bid": "1.16227", "ask": "1.16247" }, "ES35": { "spread": "12.00", "bid": "10062.9", "ask": "10074.9" }, "DE30": { "spread": "2.00", "bid": "13102.9", "ask": "13104.6" }, "NZDUSD": { "spread": "2.00", "bid": "0.69013", "ask": "0.69033" }, "EURNZD": { "spread": "3.00", "bid": "1.69046", "ask": "1.69076" }, "USDMXN": { "spread": "50.00", "bid": "19.11966", "ask": "19.12466" }, "AUDUSD": { "spread": "0.60", "bid": "0.76257", "ask": "0.76263" }, "EURCAD": { "spread": "3.00", "bid": "1.48520", "ask": "1.48550" }, "EU50": { "spread": "1.50", "bid": "3579.50", "ask": "3581.00" }, "AUDNZD": { "spread": "3.00", "bid": "1.10466", "ask": "1.10496" }, "USDSEK": { "spread": "25.00", "bid": "8.37968", "ask": "8.38218" }, "EURTRY": { "spread": "25.00", "bid": "4.51585", "ask": "4.51835" }, "AUDJPY": { "spread": "1.30", "bid": "86.655", "ask": "86.668" }, "JP225": { "spread": "7.00", "bid": "22394.3", "ask": "22401.3" }, "TRYJPY": { "spread": "5.00", "bid": "29.330", "ask": "29.380" }, "SI": { "spread": "2.00", "bid": "17.032", "ask": "17.052" }, "DX": { "spread": "5.00", "bid": "94.177", "ask": "94.227" }, "EURNOK": { "spread": "25.00", "bid": "9.52359", "ask": "9.52609" }, "USDJPY": { "spread": "0.70", "bid": "113.634", "ask": "113.641" }, "GC": { "spread": "0.30", "bid": "1278.01", "ask": "1278.31" }, "USDZAR": { "spread": "90.00", "bid": "14.45360", "ask": "14.46260" }, "NZDCAD": { "spread": "3.50", "bid": "0.87842", "ask": "0.87877" }, "USTECH": { "spread": "1.00", "bid": "6321.6", "ask": "6322.6" }, "CADCHF": { "spread": "2.50", "bid": "0.78244", "ask": "0.78269" }, "EURSEK": { "spread": "30.00", "bid": "9.77790", "ask": "9.78090" }, "USDCHF": { "spread": "1.50", "bid": "0.99608", "ask": "0.99623" }, "GBPJPY": { "spread": "2.50", "bid": "149.047", "ask": "149.072" }, "FT100": { "spread": "2.00", "bid": "7423.4", "ask": "7425.4" }, "FR40": { "spread": "2.00", "bid": "5352.1", "ask": "5354.1" }, "HS34": { "spread": "20.00", "bid": "29218.6", "ask": "29238.6" }, "GBPNZD": { "spread": "8.00", "bid": "1.89997", "ask": "1.90077" }, "EURGBP": { "spread": "0.90", "bid": "0.88959", "ask": "0.88968" }, "USDTRY": { "spread": "20.00", "bid": "3.86905", "ask": "3.87105" }, "WALL": { "spread": "1.60", "bid": "23451.7", "ask": "23453.3" }, "AU200": { "spread": "3.00", "bid": "6008.0", "ask": "6011.0" }, "USDCAD": { "spread": "1.70", "bid": "1.27285", "ask": "1.27302" }, "GBPUSD": { "spread": "0.90", "bid": "1.31164", "ask": "1.31173" }, "USDNOK": { "spread": "25.00", "bid": "8.16187", "ask": "8.16437" }, "EURJPY": { "spread": "1.50", "bid": "132.595", "ask": "132.610" }, "CL": { "spread": "2.80", "bid": "56.887", "ask": "56.915" }, "AUDCAD": { "spread": "2.00", "bid": "0.97061", "ask": "0.97081" }, "NZDJPY": { "spread": "2.50", "bid": "78.423", "ask": "78.448" }, "GBPCAD": { "spread": "3.50", "bid": "1.66949", "ask": "1.66984" }, "GBPCHF": { "spread": "3.00", "bid": "1.30650", "ask": "1.30680" }, "NZDCHF": { "spread": "4.00", "bid": "0.68734", "ask": "0.68774" }, "GBPAUD": { "spread": "5.00", "bid": "1.71981", "ask": "1.72031" }, "USDCNH": { "spread": "15.00", "bid": "6.65549", "ask": "6.65699" }, "EURAUD": { "spread": "1.80", "bid": "1.53004", "ask": "1.53022" }, "FGBL": { "spread": "1.50", "bid": "161.711", "ask": "161.726" }, "US500": { "spread": "0.40", "bid": "2586.07", "ask": "2586.47" }, "CADJPY": { "spread": "2.50", "bid": "89.263", "ask": "89.288" }, "NG": { "spread": "3.00", "bid": "3.191", "ask": "3.194" }, "LCO": { "spread": "2.80", "bid": "63.061", "ask": "63.089" }, "BITCOIN": { "spread": "25.00", "bid": "6480.1", "ask": "6505.1" } } };

const LeftPanel = (props, context) => (
    <Panel left reveal layout="dark">
        <View id="left-panel-view" navbarThrough dynamicNavbar="true">
            {context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
            <Pages>
                <Page>
                    {context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
                    <ContentBlock inner>
                        <p>Left panel content goes here</p>
                    </ContentBlock>
                    <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About"></ListItem>
                        <ListItem link="/form/" title="Form"></ListItem>
                    </List>
                    <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
                        <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
                    </List>
                </Page>
            </Pages>
        </View>
    </Panel>
);

LeftPanel.contextTypes = {
    framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
    <Panel right cover layout="dark">
        <View id="right-panel-view" navbarThrough dynamicNavbar={true}>
            {context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding /> : null}
            <Pages>
                <Page>
                    {context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding /> : null}
                    <ContentBlock>
                        <p>Right panel content goes here</p>
                    </ContentBlock>
                    <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About"></ListItem>
                        <ListItem link="/form/" title="Form"></ListItem>
                    </List>
                    <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
                        <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
                    </List>
                </Page>
            </Pages>
        </View>
    </Panel>
);

RightPanel.contextTypes = {
    framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
    return (
        <Views>
            <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
                {/* Navbar */}
                {context.framework7AppContext.theme.ios ? (
                    <Navbar>
                        <NavLeft>
                            <Link icon="icon-bars" openPanel="left" />
                        </NavLeft>
                        <NavCenter sliding>Sky App</NavCenter>
                        <NavRight>
                            <Link icon="icon-bars" openPanel="right"></Link>
                        </NavRight>
                        <Subnavbar>
                            <ButtonsSegmented>
                                <Button tabLink="#markets" active>Markets</Button>
                                <Button tabLink="#news">News</Button>
                                <Button tabLink="#allocation">Allocation</Button>
                                <Button tabLink="#account">Performance</Button>
                            </ButtonsSegmented>
                        </Subnavbar>
                    </Navbar>
                ) : null}
                {/* Pages */}
                <Pages navbarThrough>
                    <Page withSubnavbar>
                        {context.framework7AppContext.theme.material ? (
                            <Navbar>
                                <NavLeft>
                                    <Link icon="icon-bars" openPanel="left" />
                                </NavLeft>
                                <NavCenter sliding>Sky App</NavCenter>
                                <NavRight>
                                    <Link icon="icon-bars" openPanel="right"></Link>
                                </NavRight>
                                <Subnavbar>
                                    <ButtonsSegmented>
                                        <Button tabLink="#markets" active>Markets</Button>
                                        <Button tabLink="#news">News</Button>
                                        <Button tabLink="#allocation">Allocation</Button>
                                        <Button tabLink="#account">Performance</Button>
                                    </ButtonsSegmented>
                                </Subnavbar>
                            </Navbar>
                        ) : null}
                        <Tabs>
                            <Tab id="markets" active>
                            <ContentBlock>
                                <ContentBlockTitle>
                                Markets
                                </ContentBlockTitle>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>CUR</th>
                                            <th>Bid</th>
                                            <th>Ask</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        Object.keys(quotes.DailyFX).map( key => {
                                            let value = quotes.DailyFX[key]
                                            //console.log([key,value.bid])
                                            return <tr key={key}>
                                                <td>{key}</td>
                                                <td>{value.bid}</td>
                                                <td>{value.ask}</td>
                                            </tr>
                                        })
                                        }
                                    </tbody>
                                  </table>
                            </ContentBlock>
                            </Tab>
                            <Tab id="news">
                            <ContentBlock>
                                <ContentBlockTitle>
                                News
                                </ContentBlockTitle>
                                <List accordion>
                                <ListItem
                                key="1"
                                accordionItem
                                title="Cities fight to win key EU agencies from London"
                                onAccordionOpen={onOpen}
                                onAccordionOpened={onOpened}
                                onAccordionClose={onClose}
                                onAccordionClosed={onClosed}
                                >
                                <AccordionContent>
                                    <ContentBlock>
                                        <p>Cities fight to win key EU agencies from London</p>
                                        <p>A decision on the future location of two key European agencies will be made on Monday through a complex voting process. London is losing the European Banking Authority (EBA) and the European Medicines Agency (EMA) because of the UK's decision to ...</p>
                                    </ContentBlock>
                                </AccordionContent>
                                </ListItem>
                                <ListItem
                                key="2"
                                accordionItem
                                title="Volvo Cars Will Supply Uber With Up to 24000 Self-Driving Cars"
                                onAccordionOpen={onOpen}
                                onAccordionOpened={onOpened}
                                onAccordionClose={onClose}
                                onAccordionClosed={onClosed}
                                >
                                <AccordionContent>
                                    <ContentBlock>
                                        <p>Volvo Cars Will Supply Uber With Up to 24000 Self-Driving Cars</p>
                                        <p>Uber plans to buy up to 24,000 self-driving cars from Volvo, marking the transition of the U.S. firm from an app used to summon a taxi to the owner and operator of a fleet of cars.</p>
                                    </ContentBlock>
                                </AccordionContent>
                                </ListItem>
                                <ListItem
                                key="3"
                                accordionItem
                                title="Uber rolls out location sharing and glowing windshields"
                                onAccordionOpen={onOpen}
                                onAccordionOpened={onOpened}
                                onAccordionClose={onClose}
                                onAccordionClosed={onClosed}
                                >
                                <AccordionContent>
                                    <ContentBlock>
                                        <p>Uber rolls out location sharing and glowing windshields</p>
                                        <p>The ride-hailing giant is rolling out new tools such as a live location feature and windshield colors. The efforts intend to improve the pick-up process, especially in crowded areas like the airport or a concert venue.</p>
                                    </ContentBlock>
                                </AccordionContent>
                                </ListItem>
                                </List>
                            </ContentBlock>
                            </Tab>
                            <Tab id="allocation" >
                            <ContentBlock>
                                <ContentBlockTitle>
                                    Account Allocation
                                </ContentBlockTitle>
                                <Doughnut data={account_allocation_data} />
                                <ContentBlockTitle>
                                    Model Allocation
                                </ContentBlockTitle>
                                <Doughnut data={model_allocation_data} />

                            </ContentBlock>
                            </Tab>
                            <Tab id="account" >
                            <ContentBlock>
                            <ContentBlockTitle>
                            Performance
                            </ContentBlockTitle>
                                <Line data={performance_data} />
                            </ContentBlock>
                            </Tab>
                        </Tabs>
                    </Page>
                </Pages>
            </View>
        </Views>
    );
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

const AppPopup = () => (
    <Popup id="popup">
        <View navbarFixed>
            <Pages>
                <Page>
                    <Navbar title="Popup">
                        <NavRight>
                            <Link closePopup>Close</Link>
                        </NavRight>
                    </Navbar>
                    <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
                </Page>
            </Pages>
        </View>
    </Popup>
);

const AppLoginScreen = () => (
    <LoginScreen id="login-screen">
        <View>
            <Pages>
                <Page loginScreen>
                    <LoginScreenTitle>Login</LoginScreenTitle>
                    <List form>
                        <ListItem>
                            <FormLabel>Username</FormLabel>
                            <FormInput name="username" placeholder="Username" type="text" />
                        </ListItem>
                        <ListItem>
                            <FormLabel>Password</FormLabel>
                            <FormInput name="password" type="password" placeholder="Password" />
                        </ListItem>
                    </List>
                    <List>
                        <ListButton title="Sign In" closeLoginScreen />
                        <ListLabel>
                            <p>Click Sign In to close Login Screen</p>
                        </ListLabel>
                    </List>
                </Page>
            </Pages>
        </View>
    </LoginScreen>
);
export const App = (props) => (
    //Change themeType to "material" to use the Material theme
    <Framework7App themeType="material" routes={routes}>
        <Statusbar />
        <LeftPanel />
        <RightPanel />
        <MainViews props/>
        <AppPopup />
        <AppLoginScreen />
    </Framework7App>
);


