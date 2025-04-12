import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Home = () => {
  return (
    <section className="w-full max-w-5xl flex flex-col gap-8">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl w-full text-center">
        Leaderboard
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full flex flex-col gap-4">
          <p className="w-full text-center font-medium md:text-lg lg:text-xl">
            Rapid
          </p>

          <div className="border rounded-lg">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="pl-4">Username</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    boy_victor
                  </TableCell>
                  <TableCell>300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="w-full text-center font-medium md:text-lg lg:text-xl">
            Bullet
          </p>

          <div className="border rounded-lg">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="pl-4">Username</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    boy_victor
                  </TableCell>
                  <TableCell>300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="w-full text-center font-medium md:text-lg lg:text-xl">
            Blitz
          </p>

          <div className="border rounded-lg">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="pl-4">Username</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    boy_victor
                  </TableCell>
                  <TableCell>300</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
