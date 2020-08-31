import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API_URL = 'http://localhost:3000'


@Injectable({ providedIn: 'root' }) //inject this service on root, so anyone who can call it
export class PhotoService {
    constructor(private http: HttpClient) { }

    listPhotosFromUser(userName: string) {
        return this.http
            .get<Photo[]>(`${API_URL}/${userName}/photos`)
    }

    listPhotosFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
                    .append('page', page.toString())

        return this.http
            .get<Photo[]>(`${API_URL}/${userName}/photos`, { params })
    }
}