import { CSSProperties } from 'react'

import {
  Card,
  Alert,
  Button,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Input
} from 'src/components'

export const Demo = ({ hue }: { hue: number }) => {
  const style = { '--hue': hue } as CSSProperties

  return (
    <>
      <Card style={style}>
        <CardHeader style={style}>
          <Text contrast="high" style={style}>
            Card Title
          </Text>
        </CardHeader>

        <CardBody style={style}>
          <Alert style={style}>
            <Text contrast="high" style={style}>
              Alert Title
            </Text>
            <Text style={style}>Lorem Ipsum</Text>
          </Alert>
          <div>
            <Input type="text" placeholder="Placeholder..." />
            <Button style={style}>
              <Text contrast="high" style={style}>
                Add +
              </Text>
            </Button>
          </div>
          <div>
            <Input
              emphasis="outline"
              type="text"
              placeholder="Placeholder..."
            />
            <Button emphasis="outline" style={style}>
              <Text contrast="high" style={style}>
                Add +
              </Text>
            </Button>
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
            <Input
              type="text"
              inputMode="tel"
              placeholder="Number like Tel..."
            />
            <Input type="text" inputMode="url" placeholder="URL..." />
          </div>
        </CardBody>

        <CardFooter style={style}>
          <Button style={style}>
            <Text contrast="high" style={style}>
              Add +
            </Text>
          </Button>
          <Button emphasis="outline" style={style}>
            <Text contrast="high" style={style}>
              Add +
            </Text>
          </Button>
          <Button emphasis="fill" style={style}>
            <Text contrast="high" style={style}>
              Add +
            </Text>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

const HUE = [0, 25, 50, 120, 210, 170]

export const DemoList = () => {
  return (
    <>
      {HUE.map((hue) => (
        <Demo hue={hue} />
      ))}
    </>
  )
}