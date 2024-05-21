import React, { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() === "" && content.trim() === "") return;
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Note Taking App
        </Text>
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <Button colorScheme="teal" onClick={addNote}>
              Add Note
            </Button>
          </VStack>
        </Box>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontSize="xl" fontWeight="bold">
                    {note.title}
                  </Text>
                  <Text>{note.content}</Text>
                </VStack>
                <IconButton aria-label="Delete Note" icon={<FaTrash />} onClick={() => deleteNote(index)} />
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
