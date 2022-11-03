import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'

import { Colors, FontSize, FontWeight, GlobalStyles } from '@styles';
import { State } from '@app/redux/reducers';

type Props = {
    handleChange: any
};

const boldStyle = GlobalStyles.font({
    fontSize: FontSize.Header,
    fontWeight: FontWeight.SemiBold,
});

const titleStyle = GlobalStyles.font({
    fontSize: FontSize.Header,
    fontWeight: FontWeight.ExtraBold,
});

const Get: React.FC<Props> = ({
    handleChange
}) => {
    const { t } = useTranslation();
    const user = useSelector((state: State) => state.user.user)
    const defualt = (txt: string) => !txt ? t('none') : txt

    interface configurationCardText {
        title: string,
        value: string
    }

    const cardTexts: configurationCardText[] = [
        { title: t('city'), value: user?.City },
        { title: t('street'), value: user?.Street },
        { title: t('number'), value: user?.Number?.toString() }
    ]

    return (
        <View style={[GlobalStyles.container(), GlobalStyles.align()]}>
            <Card>
                <Card.Title style={titleStyle}>{t('userAdress')}</Card.Title>
                <Card.Divider />
                {cardTexts.map((txt, index) =>
                    <View key={index}>
                        <Text style={boldStyle}>
                            {txt.title}
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                            {defualt(txt.value)}
                        </Text>
                        <Card.Divider />
                    </View>
                )}
                <Button
                    onPress={handleChange}
                    icon={<Icon name="code" color={Colors.White} iconStyle={GlobalStyles.icon()} />}
                    title={t("change")}
                />
            </Card>
        </View>
    );
}

export default Get;
