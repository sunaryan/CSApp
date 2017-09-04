import { TabNavigator } from 'react-navigation';
import PortfolioModule from './tabs/Portfolio/PortfolioModule';
import AccountsModule from './tabs/Accounts/AccountsModule';
import ActionModule from './tabs/Action/ActionModule';

const MainScreenNavigator = TabNavigator({
  Tab1: { screen: PortfolioModule },
  Tab2: { screen: AccountsModule },
  Tab3: { screen: ActionModule }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
    },
    swipeEnabled: true,
    style: { backgroundColor: '#004b69' },
    labelStyle: {
      fontSize: 12,
		},
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Tab Example',
};

export default MainScreenNavigator;
