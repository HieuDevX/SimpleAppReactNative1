import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { I18nextProvider } from 'react-i18next';
import configureStore from 'app/stores/configureStore';
import AppNavigator from 'app/navigation';
import i18n from 'app/utils/i18n';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <PersistGate
              loading={<ActivityIndicator style={styles.container} />}
              persistor={persistor}
            >
              <AppNavigator />
            </PersistGate>
          </Provider>
        </I18nextProvider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
