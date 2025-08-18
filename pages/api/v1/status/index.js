function status(request, response) {
  response.status(200).json({ chave: "Gato não mia, ele hipnotiza." });
}
export default status