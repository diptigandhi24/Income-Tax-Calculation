import loginInfo from './logindata';

export default function login(name: string, password: string): Promise<{ login: boolean; id: number }> {
  if (loginInfo.has(name)) {
    if (loginInfo.get(name).password === password) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ login: true, id: loginInfo.get(name).id });
        }, 2000);
      });
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ login: false, id: null });
        }, 2000);
      });
    }
  }
}
