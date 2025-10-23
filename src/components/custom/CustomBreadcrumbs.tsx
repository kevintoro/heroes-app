import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router";
import { Fragment } from "react";

interface Breadcrumb {
  label: string;
  path: string;
}

interface Props {
  items: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ items }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={item.path}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
