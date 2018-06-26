# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
questiion_list = [
   {content: "Which is the only American state to begin with the letter 'p'?", answer: "Pennsylvania"},
   {content: "Name the world's biggest island.", answer: "Greenland"},
   {content: "What is the world's longest river?", answer: "Amazon"},
   {content: "Name the world's largest ocean.", answer: "Pacific"},
   {content: "What is the diameter of Earth?", answer: "8000 miles."},
   {content: "When did the world celebrate its most recent millennium?", answer: "Year 2000"},
   {content: "How many degrees are found in a circle?", answer: "360"},
   {content: "The Dewey Decimal system is used to categorise what?", answer: "Books"},
   {content: "How many squares are there on a chess board?", answer: "Sixty four"},
   {content: "The word 'bible' comes from the Greek 'biblion' - what does biblion mean?", answer: "Book"},
   {content: "Name the historical prince whose name was used by Bram Stoker in his famous novel.", answer: "Dracula"},
   {content: "Who was the legendary king who was killed at the Battle of Camelford?", answer: "Arthur"},
   {content: "How many points does a compass have?", answer: "32"},
   {content: "What did Sir Christopher Cockerell invent?", answer: "Hovercraft"},
   {content: "Name the gold coin introduced by Henry VII.", answer: "Sovereign"},
   {content: "Who composed the music for the ballets Sleeping Beauty and Swan Lake? ", answer: "Tchaikovsky"},
   {content: "In Japanese, what is the word for goodbye?", answer: "Sayonara"},
   {content: "How many American cents make up a dime?", answer: "Ten"},
   {content: "Name the Chinese game played with small tiles.", answer: "Mah-jong"},
   {content: "What do you call the smell which wine gives off?", answer: "Bouquet"},
   {content: "What are espadrilles?", answer: "Sandals"}
]

questiion_list.each do |question|
  Question.create question
end
