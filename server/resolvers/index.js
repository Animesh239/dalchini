const fakeData = require("../fakedata");


const resolver = {
    Query: {
        folders: ()=>{
            return fakeData.folders ;
        }, 
        folder: (parent , args)=>{
            const folderId = args.folderId ;
            const folder = fakeData.folders.find(folder => folder.id === folderId) ;
            return folder ;
        },
        note: (parent , args)=>{
            const noteId = args.noteId ;
            const note = fakeData.notes.find(note => note.id === noteId) ;
            return note ;
        }
    },
    Folder: {
        author:(parent , args)=> {
            console.log({parent,args}) ;
            const authorId = parent.authorId ;
            const author = fakeData.authors.find(author => author.id === authorId) ;
            return author ;
        }
    },
    Mutation: {
        addFolder: (parent , args)=>{
            const folder = {
                id: fakeData.folders.length + 1,
                name: args.name,
                createdAt: new Date().toISOString(),
                authorId: 123
            }
            fakeData.folders.push(folder) ;
            return folder ;
        },
        addNote: (parent , args)=>{
            const note = {
                id: fakeData.notes.length + 1,
                content: args.content,
                folderId: args.folderId
            }
            fakeData.notes.push(note) ;
            return note ;
        },
        updateNote: (parent , args)=>{
            const noteId = args.id ;
            const note = fakeData.notes.find(note => note.id === noteId) ;
            note.content = args.content ;
            return note ;
        },
        register: (parent , args)=>{
            const author = {
                id: fakeData.authors.length + 1,
                name: args.name,
                uid: args.uid
            }
            fakeData.authors.push(author) ;
            return author ;
        }
    },

} ;

module.exports = resolver;