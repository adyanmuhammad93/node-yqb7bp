import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-[300px]">
          <Card>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@bussann.co.id"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required={true} />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}