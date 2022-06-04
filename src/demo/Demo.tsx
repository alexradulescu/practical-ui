import {
  Card,
  Alert,
  Button,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Select,
  Table,
  Th,
  Td,
  Details,
  Summary,
  Textarea,
  Checkbox,
  Stack
} from 'src/components'
import { Radio } from 'src/components/radio'

export const Demo = ({
  accent
}: {
  accent: 'primary' | 'warning' | 'error' | 'success' | 'info'
}) => {
  return (
    <Card>
      <CardHeader>
        <Text contrast="high" accent={accent}>
          Card Title
        </Text>
      </CardHeader>

      <CardBody>
        <Alert accent={accent}>
          <Text contrast="high" accent={accent}>
            Alert Title
          </Text>
          <Text accent={accent}>Lorem Ipsum</Text>
        </Alert>
        <Stack padding={'12'}>Stackkkk</Stack>
        <div>
          <Input type="text" placeholder="Placeholder..." />
          <Button accent={accent}>
            <Text contrast="high" accent={accent}>
              Add +
            </Text>
          </Button>
        </div>
        <div>
          <Input emphasis="outline" type="text" placeholder="Placeholder..." />
          <Button emphasis="outline" accent={accent}>
            <Text contrast="high" accent={accent}>
              Add +
            </Text>
          </Button>
        </div>
        <div>
          <Select placeholder="Favourite car">
            <option>Renault</option>
            <option>VW</option>
            <option>Tesla</option>
          </Select>
        </div>
        <div>
          <Select emphasis="outline" placeholder="Favourite car">
            <option>Renault</option>
            <option>VW</option>
            <option>Tesla</option>
          </Select>
        </div>
        <div>
          <Select multiple placeholder="Favourite car">
            <option>Renault</option>
            <option>VW</option>
            <option>Tesla</option>
          </Select>
        </div>
        <div>
          <Select multiple emphasis="outline" placeholder="Favourite car">
            <option>Renault</option>
            <option>VW</option>
            <option>Tesla</option>
          </Select>
        </div>
        <div>
          <Input type="email" placeholder="Email..." />
          <Input type="password" placeholder="Password..." />
          <Input type="search" inputMode="search" placeholder="Search..." />
          <Input type="date" placeholder="Date..." />
          <Input
            type="text"
            inputMode="decimal"
            placeholder="Number Decimal..."
          />
          <Input type="text" inputMode="tel" placeholder="Number like Tel..." />
          <Input type="text" inputMode="url" placeholder="URL..." />
        </div>
        <div>
          <Textarea placeholder="What are you thinging about?" />
        </div>
        <div>
          <Checkbox name="terms" />
        </div>
        <div>
          <Radio name="terms" />
        </div>
      </CardBody>

      <CardFooter>
        <Button accent={accent}>
          <Text contrast="high" accent={accent}>
            Add +
          </Text>
        </Button>
        <Button emphasis="outline" accent={accent}>
          <Text contrast="high" accent={accent}>
            Add +
          </Text>
        </Button>
        <Button emphasis="fill" accent={accent}>
          <Text contrast="high" accent={accent}>
            Add +
          </Text>
        </Button>
      </CardFooter>
    </Card>
  )
}

const TableDemo = () => (
  <Card>
    <CardBody>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Sex</Th>
            <Th>Location</Th>
            <Th align="right">Worth</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Dave Gamache</Td>
            <Td>Male</Td>
            <Td>San Francisco</Td>
            <Td align="right">53,762,978.07 USD</Td>
          </tr>
          <tr>
            <Td>Dwayne Johnson</Td>
            <Td>Male</Td>
            <Td>Hayward</Td>
            <Td align="right">134,046,727.87 USD</Td>
          </tr>
        </tbody>
      </Table>

      <Details>
        <Summary>Summary here</Summary>
        <p>And the rest of the text</p>
      </Details>
    </CardBody>
  </Card>
)

export const DemoList = () => {
  const accent = 'primary'
  return (
    <>
      <Demo accent={accent} />
      <TableDemo />
    </>
  )
}
