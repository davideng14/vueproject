type fetchProps = {
    url: string;
    delay?: number;
}

export function fakeFetchData({ url = '', delay = 1000 }: fetchProps) {
    
    return new Promise(res => {
        setInterval(() => {
            let response;
            switch(url){
                case '/companies': 
                response = [ 
                    {
                        key: '1',
                        company: 'German Company',
                        email: 'german@company.com',
                        phone: '+47 789 526 2222',
                        address: 'Toronto Canada',
                    },
                    {
                        key: '2',
                        company: 'Industrial Barnes',
                        email: 'olivia@wilson.com',
                        phone: '+47 789 526 2222',
                    },
                ]; 
                break;
                case '/users': 
                response = [ 
                    {
                        key: '1',
                        name: 'Olivia Wilson',
                        gender: 'F',
                        dateOfBirth: '13/05/1980',
                        email: 'olivia@wilson.com',
                        phone: '+47 789 526 2222',
                        address: 'Toronto Canada',
                      },
                      {
                        key: '2',
                        name: 'Oliver Barnes',
                        gender: 'M',
                        dateOfBirth: '13/05/1980',
                        email: 'olivia@wilson.com',
                        phone: '+47 789 526 2222',
                        address: 'Toronto Canada',
                      },
                ]; 
                break;
            }

            res(response);
             
        }, delay);
    });
    
    

}