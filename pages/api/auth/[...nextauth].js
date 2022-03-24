import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'


export default NextAuth ({
    providers: [
        GitHubProvider({
            clientId: '2a27f1b87e36482fe12f' ,
            clientSecret: '164600f6052fe034da71fa7b60d4ed4bbb4bfdc1'
        })
    ]
})