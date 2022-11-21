import express from "express";
import { UsuarioController } from "./src/Controllers/usuarioController.js";
import { categoriaController } from "./src/Controllers/categoriaController.js";
import { ComentarioController } from "./src/Controllers/comentarioController.js";
import { PostagemController } from "./src/Controllers/postagemController.js";

const routes = express.Router()

routes.get('/usuario', UsuarioController.selectUsuario)
routes.post('/usuario/novo', UsuarioController.novoUsuario)
routes.put('/usuario/alterar/:idUser', UsuarioController.updateUsuario)
routes.delete('/usuario/delete/:idUser', UsuarioController.deleteUsuario)
routes.post('/usuario/login', UsuarioController.loginUsuario)


routes.get('/categoria', categoriaController.selectCategoria)
routes.post('/categoria/novo', categoriaController.novoCategoria)
routes.put('/categoria/alterar/:idUser', categoriaController.updateCategoria)
routes.delete('/categoria/delete/:idUser', categoriaController.deleteCategoria)


routes.get('/comentario', ComentarioController.selectComentario)
routes.post('/comentario/novo', ComentarioController.novoComentario)
routes.put('/comentario/alterar/:idUser', ComentarioController.updateComentario)
routes.delete('/comentario/delete/:idUser', ComentarioController.deleteComentario)

routes.get('/postagem', PostagemController.selectPostagem)
routes.get('/postagem/:idPost', PostagemController.selectPostagemfilter)
routes.post('/postagem/novo', PostagemController.novoPostagem)
routes.put('/postagem/alterar/:idPost', PostagemController.updatePostagem)
routes.delete('/postagem/delete/:idPost', PostagemController.deletePostagem)


export { routes }