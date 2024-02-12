import connect from "@/utils/db"

export const PUT = async(request) => {
  await connect()
  const email = new URL(request.url).searchParams.get("email")
  console.log(email)
  const role = await request.json()
  console.log(role)
}