import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, FlatList, Text, View } from "react-native";
import axios from "axios";

type Msg = { id: string; role: "user" | "assistant"; text: string };

export default function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);

  async function send() {
    if (!text.trim()) return;
    const userMsg: Msg = { id: Date.now().toString(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setText("");

    try {
      const resp = await axios.post("http://10.0.2.2:8000/api/chat", {
        messages: [...messages, userMsg],
        language: "en"
      });
      const assistantMsg: Msg = { id: Date.now().toString() + "-a", role: "assistant", text: resp.data.assistant };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={messages}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 6 }}>
            <Text style={{ fontWeight: item.role === "user" ? "700" : "400" }}>
              {item.role}: {item.text}
            </Text>
          </View>
        )}
      />
      <TextInput
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 8 }}
        placeholder="Digite sua mensagem..."
      />
      <Button title="Enviar" onPress={send} />
    </SafeAreaView>
  );
}
