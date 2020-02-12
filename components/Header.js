import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ onGoBack, title, subtitle }) {
    return (
        <Appbar.Header>
            <Appbar.BackAction
                onPress={onGoBack}
            />
            <Appbar.Content
                title={title}
                subtitle={subtitle}
            />
            {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
        </Appbar.Header>
    )
}
