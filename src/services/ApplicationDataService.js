import http from "../http-common";

class ApplicationDataService {
  get(id) {
    return http.get(`/links/${id}`);
  }

  create(data) {
    return http.post("/links", data);
  }

  findByCode(code) {
    return http.get(`/links/${code}`);
  }
}

export default new ApplicationDataService();