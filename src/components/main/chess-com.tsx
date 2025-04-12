import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FullStats } from "@/types/general";

const ChessCom = ({ stats }: { stats: FullStats }) => {
  return (
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
              {stats.rapid.map((s) => (
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    {s.username}
                  </TableCell>
                  <TableCell>{s.rating}</TableCell>
                </TableRow>
              ))}
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
              {stats.bullet.map((s) => (
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    {s.username}
                  </TableCell>
                  <TableCell>{s.rating}</TableCell>
                </TableRow>
              ))}
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
              {stats.blitz.map((s) => (
                <TableRow>
                  <TableCell className="font-medium whitespace-nowrap pl-4">
                    {s.username}
                  </TableCell>
                  <TableCell>{s.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ChessCom;
