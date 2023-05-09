import React, { useState } from "react";
import { Container } from "./style";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const DateInput = (props: any) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event: any, date: any) => {
        setShowDatePicker(false);
        if (date !== undefined) {
            setSelectedDate(date);
        }
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Data selecionada:</Text>
            <TouchableOpacity onPress={showDatePickerModal}>
                <Text>{selectedDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
});
