import ColombiaService from "../services/colombia.service.js";

export const getAllDepartments = async (req, res) => {
  //aqui va el servicio
  const resultsColombia = await ColombiaService.getAllDepartments();
  res.status(200).send(resultsColombia);
};
