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
      "projectId": configService.get<string>('project_id'),
      "privateKey": configService.get<string>('private_key')
        .replace(/\\n/g, '\n'),
      "clientEmail": configService.get<string>('client_email'), //this.configService.get<string>('client_email'),
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

function InjectConfig(): (target: typeof FirebaseService) => void | typeof FirebaseService {
  throw new Error('Function not implemented.');
}
