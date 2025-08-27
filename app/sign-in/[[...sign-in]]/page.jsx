import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <SignIn
          appearance={{
            elements: {
              headerTitle: "Welcome to Ajmal Educare",
              headerSubtitle: "Sign in to continue your learning journey",
              formButtonPrimary: "Sign In",
              footerActionText: "New to Ajmal Educare?",
              footerActionLink: "Create your account"
            }
          }}
        />
      </div>
    </div>
  )
}
