import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber } from "@/lib/utils";
import { FullStats } from "@/types/general";
import Link from "next/link";

const Lichess = ({ stats }: { stats: FullStats }) => {
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
                <TableHead className="pl-4">#</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Games</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.rapid
                .filter((p) => p.played >= 10)
                .sort((a, b) => (a.rating < b.rating ? 1 : -1))
                .map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="pl-4">{i + 1}</TableCell>
                    <TableCell className="font-medium whitespace-nowrap">
                      <Link
                        href={`https://lichess.org/@/${s.username}/perf/rapid`}
                        target="_blank"
                        className="cursor-pointer hover:underline"
                      >
                        {s.username}
                      </Link>
                    </TableCell>
                    <TableCell>{formatNumber(s.played)}</TableCell>
                    <TableCell>{formatNumber(s.rating)}</TableCell>
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
                <TableHead className="pl-4">#</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Games</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.bullet
                .filter((p) => p.played >= 10)
                .sort((a, b) => (a.rating < b.rating ? 1 : -1))
                .map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="pl-4">{i + 1}</TableCell>
                    <TableCell className="font-medium whitespace-nowrap">
                      <Link
                        href={`https://lichess.org/@/${s.username}/perf/bullet`}
                        target="_blank"
                        className="cursor-pointer hover:underline"
                      >
                        {s.username}
                      </Link>
                    </TableCell>
                    <TableCell>{formatNumber(s.played)}</TableCell>
                    <TableCell>{formatNumber(s.rating)}</TableCell>
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
                <TableHead className="pl-4">#</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Games</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.blitz
                .filter((p) => p.played >= 10)
                .sort((a, b) => (a.rating < b.rating ? 1 : -1))
                .map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="pl-4">{i + 1}</TableCell>
                    <TableCell className="font-medium whitespace-nowrap">
                      <Link
                        href={`https://lichess.org/@/${s.username}/perf/blitz`}
                        target="_blank"
                        className="cursor-pointer hover:underline"
                      >
                        {s.username}
                      </Link>
                    </TableCell>
                    <TableCell>{formatNumber(s.played)}</TableCell>
                    <TableCell>{formatNumber(s.rating)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Lichess;
