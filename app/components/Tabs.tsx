import React from 'react';
import { Tab, TabView } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';

import { Colors, FontSize, FontWeight, GlobalStyles } from '@styles';
import Set from '@components/Set'
import Get from '@components/Get'

type Props = {};

const titleStyle = GlobalStyles.font({
  fontSize: FontSize.Header,
  fontWeight: FontWeight.SemiBold,
  color: Colors.White
});

const contentStyle = GlobalStyles.content({
  width: '100%'
});

const Tabs: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [index, setIndex] = React.useState(0);

  interface configurationTabs {
    component: any;
    id: number;
    title: string;
  }

  let tabs: configurationTabs[] = [
    { component: Set, id: 1, title: "set" },
    { component: Get, id: 0, title: "get" },
  ]

  const handlePush = (tab: configurationTabs) => {
    setIndex(tab.id)
  }

  return (
    <>
      <StatusBar backgroundColor={Colors.Black} />
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: Colors.SeparatorColor,
          height: 8
        }}
        variant="primary"
      >
        {tabs.map((tab) =>
          <Tab.Item
            key={tab.id}
            title={t(tab.title)}
            titleStyle={titleStyle}
          />
        )}
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        {tabs.map((tab) =>
          <TabView.Item
            key={tab.id}
            style={contentStyle}
          >
            <tab.component handleChange={() => handlePush(tab)} />
          </TabView.Item>
        )}
      </TabView>
    </>
  );
};

export default Tabs;
