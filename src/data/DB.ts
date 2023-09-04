import { cloneDeep } from 'lodash';
import {User} from "./Define";


export default class DB
{
  static Inst:DB;
  users:User[] = [];

  url:string = "https://docs.google.com/spreadsheets/d/10DX7h4Ogpfvt7jpl4yDNBX2itDP2RE6aEp6-RxVPtNk/export?format=tsv&range=2:1000&#gid=0";

  RandomUserList():User[]
  {
    let users:User[] = cloneDeep(this.users);
    users.splice(0, 1);
    for(let i = 0; i < 100; i++)
        {
            let idx1:number = Math.floor(Math.random() * users.length);
            let idx2:number = Math.floor(Math.random() * users.length);

            let temp:User = users[idx1];
            users[idx1] = users[idx2];
            users[idx2] = temp; 
        }

    return users;
  }
 
  async Init(setIsComplete:React.Dispatch<React.SetStateAction<boolean>>)
  {
    await this.GetUserData();
    setIsComplete(true);
  }

  async GetUserData()
  {
    const res:Response = await fetch("https://docs.google.com/spreadsheets/d/10DX7h4Ogpfvt7jpl4yDNBX2itDP2RE6aEp6-RxVPtNk/export?format=tsv&range=2:1000&gid=0");
    const data:string = await res.text();
    
    let rows:string[] = data.split('\n');

    for (let i:number = 0; i < rows.length; i++)
    {
      let columns:string[]  = rows[i].split('\t');
      let id:number = Number(columns[0]);

      let user:User ={
        id: id,
        name: columns[1],
        username: columns[2],
        imageLink: `https://raw.githubusercontent.com/strawy12/Instagram_Clone/main/src/images/ProfileImages/${columns[1]}.${columns[3].replace('\r', '')}`
      };

      this.users.push(user);
    }
  }

  GetUser(id:number):User
  { 
    let user = this.users.find(x=>x.id == id) as User;
    return user;
  }
}

  