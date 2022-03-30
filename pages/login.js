import React from 'react';
import {useRouter} from 'next/router';

function loginPage() {

    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push('/api/auth/signin') }>Sign In With GitHub</button>
        </div>
    );
}

export default loginPage;