import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initializeApp, cert, ServiceAccount, App } from 'firebase-admin/app';
import { getFirestore, Firestore, CollectionReference } from 'firebase-admin/firestore';
import { Config } from './firebase.model';

@Injectable()
export class FirebaseService {
  public app: App;
  public database: Firestore;

  // Collections
  public usersCollection: CollectionReference;

  constructor(private configService: ConfigService<Config>) {

    const adminConfig: ServiceAccount = {
      "projectId": "piccacolors",//this.configService.get<string>('project_id'),
      "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDG/M/kPapvrBG+\nreBVlrOKdptcD9rUpUGyZxLBOomSPBxtr6pJD8Wjf+WfUPc9XUp81xy4ywU96MxL\nTKZA011LrYQ+qLcZLMSjrvLXzpcnFHybncx+mGWm9KQIFy4DWm/NynZGEZRLM5YQ\n0ePnbZQUVZUvHqvW+G3rEwpdFkt/cXNfuGmuhu7aGnFfOUoZ9QH2VXp2snI04SwH\nObfQvi5l3aNa5wKhx0EZePHpGOSkdKdiIAbRjZf4L18rqmRKIXRctlF/As8AgP4Q\nwZZiWqeVhxivfWeE2l43zZO0IEMsPSnwE0YQ+26OqNCVbjvVc/3jD8vslUzzZFPG\n3KCva+1lAgMBAAECggEACfH9w/cPCyjK9EBFe5GeJJf7+NR0B/fAelWresvdr1jg\nxNyoQqGOq7bLN7S4vrDodafcsCG5f9ggSc0pbAkEWzFvcCBHknMJ2vJ2AbI6HMJp\n3e87lsIwJnGItzzNWG6PMvZhBeyAAGgyImITJXB1G7URUTsTtJlTCRI5DOD94f8n\nhnEaZZOyb0eGy0jpSSKsEcR16VTOFoWG73dg6K79cAb/+0L3yHnlyn1Kc9KXoEoD\n/d2iZkJ62krPbMgwfdEsKUco0BSNIV7cYxIL1ExOF+zruYEQY2LRgLQRpvEF+ZBd\nabMrZi5+wUEUDoTslwv727Es7jRszqPzNZ3sh/8QMQKBgQDoYdK3p4GyoOxzJFfh\nriIFGW7pCxYBQirgXnqC6egxjYsujw27EY9Uo7DsrCdNVNWf74cziWuRUiKvIWsM\nNd1DkK6TdTmXalhY7EEIz93EueHc8jLyzCuvqIBTDGoUOJ0qdj6Z3dWDl4pqG9DB\naMVUvM0tlJNalFDqxVUDjKJgOQKBgQDbNh7XDy4wJmzdJUsbvxpKAfG6+f6Sh5cd\nWizyitqq5acPNk0absDpB7E0FW6vCmcqKH7HVQm/72zhd2wlKPcDZGjOFJ8JFv/n\n2qZja1I4scCxhsEk7ZPsER0ApQBmKXysWhfNCXXMWQWtvublsig9Zcxl4qrrSww7\nR4wOn+hejQKBgQDTMTxZTrHPzvK1fj0kTKZ8be3ffATGpgTjntnGqqAskNACQ16e\nOcpCiPXdUmPxovz2+rCsROLu0m/VLBDmqvlpU09lki8CDlM2lZhRUuDgznKX48Ir\n6SR24zOkxm6N7BniIk6odfR7QLk50Ae8DuTwKxppp1L4Cj0z8J1fuWtE+QKBgCac\nDqyEUPdMHUqKIgN+EkxMsV3kYFFArn4N/vKtQDxvfJAyWTw5m6KvpydsSvVrmKYV\nQdcsBC6ZJg1EMnkNEQy457i8axJ3yZT1ru693Vp8/FqISIaPjck7bmdJqJtV3U6i\nA6UqcGQQne5vPE3ipjHCN1EOrloI+tuKC4Ib6hqVAoGAFaYACgUAM8+zj9aaHzDT\nqt0PMqt9rcFRHU1KfqX8cKT/fVxbxUxcZyJPBloyMfe/itPVzJv8OlAQSMnvOKaM\nnwDe/gCoFn8Qsj91P4eSvLqOiIIsX7Q5NA57a5G1JXXysLgVz5EP4rsQqOdybXcB\nipbKsjwzRZY/U5Es/CEv3Xk=\n-----END PRIVATE KEY-----\n",
      "clientEmail": "firebase-adminsdk-7jz06@piccacolors.iam.gserviceaccount.com", //this.configService.get<string>('client_email'),
    };

    this.app = initializeApp({
      credential: cert(adminConfig),
    });


    this.database = getFirestore(this.app);
    

    this._createCollections();
  }

  private _createCollections() {
    this.usersCollection = this.database.collection('users');
  }
}