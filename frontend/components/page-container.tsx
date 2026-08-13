export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm w-full leading-loose">
        {children}
      </div>
    </div>
  )
}