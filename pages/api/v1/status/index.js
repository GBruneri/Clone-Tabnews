function status(request, response) {
  response.status(200).json({ chave: "valor ou não vlaor" });
}

export default status;
