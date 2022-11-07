import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'

import { data } from '@utils/lists'
import { GlobalStyles } from '@styles';
import { GET_USERS } from '@app/redux/actions'

type Props = {
    handleChange?: any
}

const Set: React.FC<Props> = ({
    handleChange
}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [selectedEmail, setSelectedEmail] = useState<string>("")

    const handlePushButton = () => {
        dispatch({ type: GET_USERS, payload: selectedEmail })
        handleChange()
    }

    return (
        <View style={[GlobalStyles.container()]}>
            <ScrollView>
                {data.users.map((email, index) =>
                    <ListItem
                        key={index}
                        bottomDivider>
                        <ListItem.CheckBox
                            onPress={() => setSelectedEmail(email)}
                            checked={email === selectedEmail}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{email}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                )}
            </ScrollView>
            <View style={GlobalStyles.padding()}>
                <Button
                    title={t('push')}
                    onPress={handlePushButton}
                />
            </View>
        </View>
    );
}

export default Set;
